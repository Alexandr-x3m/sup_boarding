import React from 'react'

const Header: React.FC = () => {

    return (
        <>
            {window.document.body.clientWidth > 1200
                ? (<header>

                </header>)
                : (<header>

                </header>)
            }

        </>
    )
}

export default Header