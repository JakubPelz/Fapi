import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../components/context/UserContext'

const CustomerInfo = () => {
  const [name, setName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [redirect, setRedirect] = useState(false);

  const { user, setUser } = React.useContext(UserContext)

  const submit = async (e) => {
    e.preventDefault();
    const response = { name, companyName, email, address, city, zip };
    setUser(response)
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to={"/products"} />
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
                        placeholder={user === null ? "Jména a příjmení" : user.name}

                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>Název firmy</label>
                      <input
                        type="text"
                        name="Název firmy"
                        placeholder={user === null ? "Název firmy" : user.companyName}

                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder={user === null ? "Email" : user.email}
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
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
                        placeholder={user === null ? "Město" : user.city}
                        id="First name"
                        required
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>Ulice včetně č.p.</label>
                      <input
                        type="text"
                        name="Last name"
                        placeholder={user === null ? "Ulice a číslo popisné" : user.address}
                        id="Last name"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label>PSČ</label>
                      <input
                        type="text"
                        name="email"
                        placeholder={user === null ? "PSČ" : user.zip}
                        id="email"
                        required
                        onChange={(e) => setZip(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="ui button"
                  type="submit"
                  style={{ marginTop: '30px' }}
                  onClick={submit}
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