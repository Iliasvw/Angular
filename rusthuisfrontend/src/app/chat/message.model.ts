export class Message {
    private _sender: String;
    private _content: String;
    private _messageId: Number;

    constructor(sender: String, content: String, messageId?:Number) {
        this._sender = sender;
        this._content = content;
        this._messageId = messageId;
    }

    get sender() {
        return this._sender;
    }

    get content() {
        return this._content;
    }

    get messageId() {
        return this._messageId;
    }

    toJSON() {
        return {
            messageId: this._messageId,
            sender: this._sender,
            content: this._content
        }
    }
}