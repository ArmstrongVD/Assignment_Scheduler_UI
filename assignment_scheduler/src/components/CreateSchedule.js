import {  Button } from '@va-bip/bip-ui-components';


function CreateSchedule() {


    function handleClick() {
       alert('Working')
    }
    return (
        <div>
            <Button onClick={handleClick}>CreateSchedule</Button>

        </div>
    )
    
};

export default CreateSchedule;