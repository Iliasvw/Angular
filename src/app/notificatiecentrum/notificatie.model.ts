export class Notificatie {
    private _date: Date;
    private _message: String;
    private _patientid: String;

    constructor(message: String, patientid: String, date?: Date) {
        if(date) {
            this._date = date;
        } else {
            this._date = new Date();
        }
        this._message = message;
        this._patientid = patientid;
    }

    get date() {
        return this._date;
    }

    get message() {
        return this._message;
    }

    get patientid() {
        return this._patientid;
    }

    toJSON() {
        return {
            date: this._date,
            message: this._message,
            patientid: this._patientid
        }
    }
}