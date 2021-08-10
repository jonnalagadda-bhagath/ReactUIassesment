import {UserDetailsFormContext} from './user-details-form-context';

function UserDetailsForm(props) {
    console.log(props)
  return (
      <>
        <UserDetailsFormContext.Consumer>
            {({firstName, lastName, submitForm}) => (
                <form>
                    <div>
                        <label htmlFor="">FirstName : </label>
                        <input type="text" name='firstName' id='firstName' defaultValue={firstName}></input>
                    </div>
                    
                    <div>
                         <label htmlFor="">LastName : </label>
                        <input type="text" name="lastName" id="lastName" defaultValue={lastName}></input>
                    </div>
                    <div>
                        <button
                        onClick={submitForm}>
                        Update
                        </button>
                    </div>
                </form>
            )}
        </UserDetailsFormContext.Consumer>
    </>
  );
}

    
 
export default UserDetailsForm;