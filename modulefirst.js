import * as a2 from './modulesecond.mjs'
import simple from './modulesecond.mjs'
//the above one is a EcmaScript Module export
//One thing in ECM(EcmaScriptModule) when you use export function function_name() then it should be imported in this form i.e. import {simple} from './modulesecond'
//if you have have saved the file in this format i.e. export default function function_name() thern you can import simple from './modulesecond.js'
//The below one is common module import
//const simple2 = require('./modulesecond')
//simple();
console.log(a2);