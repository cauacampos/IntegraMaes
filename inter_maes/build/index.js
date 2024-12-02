"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const addAgenda_1 = require("./endpoints/addAgenda");
const addUser_1 = require("./endpoints/addUser");
const addEnterprise_1 = require("./endpoints/addEnterprise");
const deleteAgendaById_1 = require("./endpoints/deleteAgendaById");
const deleteUserById_1 = require("./endpoints/deleteUserById");
const deleteEnterpriseById_1 = require("./endpoints/deleteEnterpriseById");
const getAllAgenda_1 = require("./endpoints/getAllAgenda");
const getAllUser_1 = require("./endpoints/getAllUser");
const getAllEnterpriser_1 = require("./endpoints/getAllEnterpriser");
const getUserById_1 = require("./endpoints/getUserById");
const getAgendaById_1 = require("./endpoints/getAgendaById");
const getEnterpriseById_1 = require("./endpoints/getEnterpriseById");
const updateUserById_1 = require("./endpoints/updateUserById");
const updateAgendaById_1 = require("./endpoints/updateAgendaById");
const updateEnterpriseById_1 = require("./endpoints/updateEnterpriseById");
const addFilho_1 = require("./endpoints/addFilho");
const deleteFilhoById_1 = require("./endpoints/deleteFilhoById");
const updateFilhoById_1 = require("./endpoints/updateFilhoById");
const getAllFilho_1 = require("./endpoints/getAllFilho");
const getFilhoById_1 = require("./endpoints/getFilhoById");
app_1.app.post('/agenda', addAgenda_1.addAgenda);
app_1.app.post('/filho', addFilho_1.addFilho);
app_1.app.post('/empresa', addEnterprise_1.addEnterprise);
app_1.app.post('/usuario', addUser_1.addUser);
app_1.app.delete('/empresa/:id', deleteEnterpriseById_1.deleteEnterpriseById);
app_1.app.delete('/filho/:id', deleteFilhoById_1.deleteFilhoById);
app_1.app.delete('/agenda/:id', deleteAgendaById_1.deleteAgendaById);
app_1.app.delete('/usuario/:id', deleteUserById_1.deleteUserById);
app_1.app.put('/filho/:id', updateFilhoById_1.updateFilhoById);
app_1.app.put('/usuario/:id', updateUserById_1.updateUserById);
app_1.app.put('/empresa/:id', updateEnterpriseById_1.updateEnterpriseById);
app_1.app.put('/agenda/:id', updateAgendaById_1.updateAgendaById);
app_1.app.get('/agenda', getAllAgenda_1.getAllAgenda);
app_1.app.get('/filho', getAllFilho_1.getAllFilho);
app_1.app.get('/filho/:id', getFilhoById_1.getFilhoById);
app_1.app.get('/agenda/:id', getAgendaById_1.getAgendaById);
app_1.app.get('/empresa', getAllEnterpriser_1.getAllEnterprise);
app_1.app.get('/empresa/:id', getEnterpriseById_1.getEnterpriseById);
app_1.app.get('usuario', getAllUser_1.getAllUser);
app_1.app.get('/usuario/:id', getUserById_1.getUserById);
//# sourceMappingURL=index.js.map