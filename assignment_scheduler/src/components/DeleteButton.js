import { Button } from '@va-bip/bip-ui-components';


function DeleteButton() {

    function handleDelete(){
        alert('delete working')
    };

    
    return (
        <div>
            <Button onClick={handleDelete}>Delete</Button>
        </div>
    )
    
};


export default DeleteButton;