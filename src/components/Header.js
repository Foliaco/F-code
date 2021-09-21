import React from 'react';

const Header=(props)=>{

    return(
      <header>
        <nav  className="d-flex">
            <h1>-F Code</h1>
            <div>
                <ul className='d-flex'>
                    <li><button>Save</button></li>
                    <li><button>Save on some Drive</button></li>
                    <li><button>Setting</button></li>
                    <li><button>Close</button></li>
                </ul>
            </div>
        </nav>
      </header>
    );
}
export default Header;