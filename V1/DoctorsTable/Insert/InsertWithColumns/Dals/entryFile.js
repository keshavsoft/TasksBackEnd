import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorSpec}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDoctorName,LocalCoumnDoctorSpec});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};