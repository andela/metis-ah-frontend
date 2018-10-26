import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toastr from 'toastr';

Enzyme.configure({ adapter: new Adapter() });
global.toastr = toastr;
