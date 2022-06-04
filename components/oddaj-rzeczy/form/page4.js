import style from "../../../styles/oddaj-rzeczy/form/Page4.module.scss";
import { useDispatch } from "react-redux";
import { setPage4Data } from "../../../redux/actions/dataFromForm";
import { useState, useEffect } from "react";


export default function Page4 () {

    const dispatch = useDispatch();
    const [page4State, setPage4State] = useState(null);

    const handleChange = (key, value) => {
        setPage4State(prevState => {
            return {
                ...prevState,
                [key] : value
            }
        })
    }

    useEffect(()=>{

        if (page4State) {
        dispatch(setPage4Data(page4State));
        }

    },[page4State]);

    return(
        <section className={style.formContainer}>
            <h2>Padaj adres oraz termin odbioru przez kuriera</h2>
            <form>
                <div className={style.address}>
                    <h5>Adres odbioru:</h5>
                    <div>
                        <h6>Ulica</h6>
                        <input type="text" name="ulica" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Miasto</h6>
                        <input type="text" name="miasto" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Kod<br/>Pocztowy</h6>
                        <input type="text" name="kod_pocztowy" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Numer<br/>telefonu</h6>
                        <input type="text" name="numer_telefonu" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                </div>
                <div className={style.date}>
                    <h5>Termin odbioru:</h5>
                    <div>
                        <h6>Data</h6>
                        <input type="text" name="data" onChange={e => handleChange(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <h6>Godzina</h6>
                        <input type="text" name="godzina" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                    <div>
                        <h6>Uwagi<br/>dla kuriera</h6>
                        <textarea rows="5" name="uwagi" onChange={e => handleChange(e.target.name, e.target.value)} />
                    </div>
                </div>
            </form> 
            
        </section>
    )
}