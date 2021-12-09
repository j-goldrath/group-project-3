import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const toekn = this.getToken();
        return !!toekn && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now90 / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToekn() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToekn);

        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();