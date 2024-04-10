import { Button, VBMSTable } from '@va-bip/bip-ui-components';
import './Table.scss'

function Table() {
    return (
      <div className='table'>
        <VBMSTable
        
        actions={[
            {
              func: function noRefCheck(){},
              name: 'Toggle items per page'
            },
            {
              hook: 'SELECT_ALL_ROWS',
              name: 'Test Action Hook'
            }
          ]}

        delete={[
            {
              func: function noRefCheck(){},
              name: 'Toggle items per page'
            },
            {
              hook: 'SELECT_ALL_ROWS',
              name: 'Test Action Hook'
            }
          ]}
          ariaRowLabelKeys={[
            'docTitle',
            'id'
          ]}
       
         
          body={[
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: 
                <Button inverse outline>
                  Edit
                </Button>
              
            },
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
            {
              scheduleName:<a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
            {
              scheduleName: <a href="#">Schedule Name</a>,
              status: "Active",
              applyTo: "Select Regional Office",
              scheduledStart: "Tues Nov 9 2024 16:34:50 EST",
              scheduledEnd: "Tues Nov 12 2024 16:34:50 EST",
              createdBy: "RSCOTT_NWQTM",
              createdOn: "Tues Nov 9 2024 16:34:50 EST",
              edit: (
                <Button inverse outline>
                  Edit
                </Button>
              ),
            },
          ]}
          columns={[
            {
              columnWidth: 100,
              displayName: "Schedule Name",
              id: "scheduleName",
              isSortable: true,
            },
            {
              displayName: "Status",
              isSortable: true,
              id: "status",
            },
            {
              displayName: "Apply to",
              isSortable: true,
              id: "applyTo",
            },
            {
              displayName: "Scheduled Start",
              isSortable: true,
              id: "scheduledStart",
            },
            {
              displayName: "Scheduled End",
              isSortable: true,
              id: "scheduledEnd",
            },
            {
              displayName: "Created By",
              isSortable: true,
              id: "createdBy",
            },
            {
              displayName: "Created On",
              isSortable: true,
              id: "createdOn",
            },
            {
              displayName: "Edit",
              isSortable: true,
              id: "edit",
            },
          ]}
          direction='descending'
          selectable
          border
        //   customHeader={<CustomHeader />}
        />
      </div>
    );

    
    
    
    
    
    
    
}
export default Table;