export function idbPromise(siteName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('helpr', 1);
        let db, tx, site;
        request.onupgradeneeded = function (e) {
            const db = request.result;
            db.createObjectStore('fundraiser', { keyPatch: '_id' });
            db.createObjectStore('donations', { keyPath: '_id' });
        };

        request.onerror = function (e) {
            console.log('There was an error')
        };

        request.onsuccess = function (e) {
            db = request.result;
            tx = db.transaction(siteName, 'readwrite');
            site = tx.objectStore(siteName);

            db.onerror = function (e) {
                console.log('error', e);
            };

            switch (method) {
                case 'put':
                    site.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = site.getAll();
                    all.onsucess = function () {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    site.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            tx.oncomplete = function() {
                db.close();
            }
        }
    })
}