module.exports  =  class MessageService {
    constructor() {
      this.messages = ["how are you"];
      this.currentId = 0;
    }
  
    async find(params) {
      return this.messages;
    }
  
    async get(id, params) {
      const message = this.messages.find(message => message.id === parseInt(id, 10));
      if(!message) {
        throw new Error(`Message with id ${id} not found`);
      }
      return message;
    }
  
    async create(data, params) {
      const message = Object.assign({
        id: ++this.currentId
      }, data);
  
      this.messages.push(message);
  
      return message;
    }
  
    async patch(id, data, params) {
      const message = await this.get(id);
  
      return Object.assign(message, data);
    }
  
    async remove(id, params) {
      const message = await this.get(id);
      const index = this.messages.indexOf(message);
      this.messages.splice(index, 1);
      return message;
    }
  }