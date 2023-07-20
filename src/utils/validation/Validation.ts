import { InputAuth }  from '../../components/inputAuthTemplate';


export class Validation {
    public static isEmail(_input: InputAuth): void {
        const sampleRegEx = /.+@.+\.\w+/;
        const res: boolean = sampleRegEx.test(_input.getValue());
        if (res) {
            _input.removeError();
        } else {
            _input.setError('Wrong mail format');
        }
    }

    public static isEmptyInput(_input: InputAuth): boolean {
        const isEmpty: boolean = this.isEmptyInputWithoutRender(_input);
        if (!isEmpty) {
            _input.removeError();
        } else {
            _input.setError('Input cannot be empty');
        }
        return isEmpty;
    }

    public static isEmptyInputWithoutRender(_input: InputAuth): boolean {
        return _input.getValue() === '' || _input.getValue() === undefined || _input.getValue() === null;
    }

    public static isPhone(_input: InputAuth): void {
        const sampleRegEx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        const res: boolean = sampleRegEx.test(_input.getValue());
        if (res) {
            _input.removeError();
        } else {
            _input.setError('Wrong phone format');
        }
    }

    public static checkTwoPassword(_input: InputAuth, _inputRepeat: InputAuth): void {
        const isEmptyFirst = this.isEmptyInput(_input);
        const isEmptyRepeat = this.isEmptyInput(_inputRepeat);
        const isEmpty = isEmptyFirst || isEmptyRepeat;
        if (!isEmpty) {
            if (_input.getValue() === _inputRepeat.getValue()) {
                _input.removeError();
                _inputRepeat.removeError();
            } else {
                _inputRepeat.setError('Password mismatch');
            }
        }
    }
}

export default Validation;
