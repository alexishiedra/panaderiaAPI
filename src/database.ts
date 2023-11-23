import { Pool } from "pg";
//import {config} from 'dotenv';
//config();


//si se desarrolla en entorno local activa este bloque de codigo

/*
export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password: 'davitzoL18',
    database: 'menusdb'
});
*/








//external url de render

export const pool = new Pool({
    user:'brunotoledano',
    host:'dpg-cl6klju6m8qc738b88ag-a.oregon-postgres.render.com',
    password: 'xiB7GOXYDZILLXagwpBEyU47mFXExVom',
    database: 'panaderiasbd',
    port: 5432,
    ssl:true
});


