import DeleteButton from './DeleteButton';
import CreateSchedule from './CreateSchedule';
import './Header.scss'



function CustomHeader() {

    return (
        <div className='header'>
            <CreateSchedule />
            <DeleteButton />
        </div>
    )
    
};

export default CustomHeader