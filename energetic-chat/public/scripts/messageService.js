import { Data } from "./data.js";

const data = new Data();
const jsonRequestURL = "./messages.json";

function MessageService() {}

MessageService.prototype.getMessages = function() {
  return data.getUsefulContents(jsonRequestURL).then(function(data) {
    return data;
  });
};

export { MessageService };
