import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDoctorName,LocalCoumnDoctorSpec}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDoctorName,LocalCoumnDoctorSpec});

    return LocalFromDal;
};

export {
    postDefaultFunc
};