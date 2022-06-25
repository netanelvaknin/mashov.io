import TextField from '../TextField';
import {render} from '@testing-library/react';

describe('TextField', function () {
    it('should render correctly', () => {
        const {getByLabelText} = render(<TextField label="שם משתמש" />);
        expect(getByLabelText('שם משתמש')).toBeInTheDocument();
    });
});