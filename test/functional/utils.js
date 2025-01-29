export const getLib = async () => await import(process.env.AUTOMATION ? '../../dist' : '../../dist');

