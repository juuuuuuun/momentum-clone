class MomentumLocalStorage {

    get(key){
        return JSON.parse(localStorage.getItem(key));
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    isExist(key) {
        return !!localStorage.getItem(key);
    }

}

export const momentumLocalStorage = new MomentumLocalStorage();