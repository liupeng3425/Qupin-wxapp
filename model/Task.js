/**
 * Created by Peng on 2016/12/17.
 */

const AV = require('../libs/av-weapp');

class Task extends AV.Object {
    get objectId() {
        return this.get('objectId');
    }
    get day() {
        return this.get('day');
    }

    set day(value) {
        this.set('day', value);
    }

    get title() {
        return this.get('title');
    }

    set title(value) {
        this.set('title', value);
    }

    get money() {
        return this.get('money');
    }

    get pic() {
        return this.get('pic').thumbnailURL(160, 160);
    }

    set pic(value) {
        this.set('pic', value);
    }
}

AV.Object.register(Task);
module.exports = Task;