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


  const isValidName = name != null && name.trim().length > 0;
  const isValidCompany = companyName != null && companyName.trim().length > 0;
  const isValidEmail = email != null && email.trim().length > 0;
  const isValidCity = city != null && city.trim().length > 0;
  const isValidAddress = address != null && address.trim().length > 0;
  const isValidZip = zip != null && zip.trim().length > 0;

  const submit = async (e) => {
    e.preventDefault();
    const response = { name, companyName, email, address, city, zip };
    setUser(response)
    if (isValidAddress && isValidName && isValidCompany && isValidEmail && isValidCity && isValidZip) {
      setRedirect(true)
    }
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
                        name="name"
                        placeholder={user === null ? "Jméno a příjmení" : user.name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      {!isValidName ? <div className="validation">Vypňte jméno a příjmení</div> : <div></div>}
                    </div>
                    <div className="field">
                      <label>Název firmy</label>
                      <input
                        type="text"
                        name="company"
                        placeholder={user === null ? "Název firmy" : user.companyName}
                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                      {!isValidCompany ? <div className="validation">Vyplňte název firmy</div> : <div></div>}
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder={user === null ? "Email" : user.email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {!isValidEmail ? <div className="validation">Vyplňte email</div> : <div></div>}

                    </div>
                  </div>

                  <div className="eight wide column">
                    <h3>Adresa</h3>
                    <div className="field">
                      <label>Město</label>
                      <input
                        type="text"
                        name="city"
                        placeholder={user === null ? "Město" : user.city}
                        id="First name"
                        required
                        onChange={(e) => setCity(e.target.value)}
                      />
                      {!isValidCity ? <div className="validation">Vyplňte město</div> : <div></div>}
                    </div>
                    <div className="field">
                      <label>Ulice včetně č.p.</label>
                      <input
                        type="text"
                        name="address"
                        placeholder={user === null ? "Ulice a číslo popisné" : user.address}
                        id="Last name"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      {!isValidAddress ? <div className="validation">Vyplňte ulici</div> : <div></div>}
                    </div>
                    <div className="field">
                      <label>PSČ</label>
                      <input
                        type="text"
                        name="zip"
                        placeholder={user === null ? "PSČ" : user.zip}
                        id="email"
                        required
                        onChange={(e) => setZip(e.target.value)}
                      />
                      {!isValidZip ? <div className="validation">Vypľňte poštovní směrovací číslo</div> : <div></div>}
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