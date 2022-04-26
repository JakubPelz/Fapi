import React from 'react'
import { UserContext } from '../components/context/UserContext'

const CustomerInfo = () => {
  const { user, setUser } = React.useContext(UserContext)

  const submit = async (e) => {
    e.preventDefault();
  }
  return (
    <div className='ui vertical mashead segment' style={{ marginTop: "50px" }}>
      <div className='ui center aligned container'>
        <div className="ui vertical left aligned footer segment">
          <div className="center aligned container" id='CustomerInfo'>
            <div style={{ margin: "30px" }}>
              <h1>Prosím zadejte všechny své údaje</h1>
            </div>
            <div style={{ margin: "20px" }}>
              <form className="ui form">
                <div className="ui stackable inverted divided grid">
                  <div className="eight wide column">
                    <div className="field">
                      <h3>Objednavatel</h3>
                      <label>Jméno a příjmení</label>
                      <input
                        type="text"
                        name="First name"
                        placeholder="Jméno a příjmení"
                        id="First name"
                        required

                      />
                    </div>
                    <div className="field">
                      <label>Název firmy</label>
                      <input
                        type="text"
                        name="Last name"
                        placeholder="Jméno firmy"
                        id="Last name"
                        required
                      /*      onChange={(e) => setCompanyName(e.target.value)} */
                      />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                      /*   onChange={(e) => setEmail(e.target.value)} */
                      />
                    </div>
                  </div>

                  <div className="eight wide column">
                    <h3>Adresa</h3>
                    <div className="field">
                      <label>Město</label>
                      <input
                        type="text"
                        name="First name"
                        placeholder="Město"
                        id="First name"
                        required
                      /*        onChange={(e) => setCity(e.target.value)} */
                      />
                    </div>
                    <div className="field">
                      <label>Ulice včetně č.p.</label>
                      <input
                        type="text"
                        name="Last name"
                        placeholder="Ulice a číslo popisné"
                        id="Last name"
                        required
                      /*             onChange={(e) => setStreet(e.target.value)} */
                      />
                    </div>
                    <div className="field">
                      <label>PSČ</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                      /*            onChange={(e) => setZipCide(e.target.value)} */
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="ui button"
                  type="submit"
                  style={{ marginTop: '30px' }}

                >
                  Potvrdit
                </button>
              </form>
            </div>
          </div>
        </div></div>
    </div >
  )
}

export default CustomerInfo