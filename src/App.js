import React from 'react';
import './App.css';
import {useState } from 'react'
import {useForm} from "react-hook-form";
import Counter from "./components/Counter";
import Button from "./components/Button"


export default function App() {

    const [aardbei, setAardbei] = useState(0);
    const [apple, setApple] = useState(0);
    const [banaan, setBanaan] = useState(0)
    const [kiwi, setKiwi] = useState(0)




    const {register} = useForm();

    //reset counter
    const reset = () => {

        setKiwi(0)
        setAardbei(0)
        setBanaan(0)
        setApple(0)

    }

    return (

    <>

        <section className="counter">
            <h1>Fruit mandje</h1>

          <article className="btn__container">
                <h1>🍓 Aardbeien</h1>
              <Counter
                fruitCount={aardbei}
                setFruitCount={setAardbei}


              />
          </article>
          <article className="btn__container">
                  <h1>🍏 Appels</h1>
                  <Counter
                      fruitCount={apple}
                      setFruitCount={setApple}

                  />
          </article>
          <article className="btn__container">
                      <h1>🍌 Bananen</h1>
                      <Counter
                          fruitCount={banaan}
                          setFruitCount={setBanaan}
                          resetFruit={reset}

                      />
          </article>
          <article className="btn__container">
                  <h1>🥝 kiwi's</h1>
                  <Counter
                      fruitCount={kiwi}
                      setFruitCount={setKiwi}

                  />
          </article>

            <article className="reset">

                <Button
                    type="button"
                    onClick={() => reset()}>Reset
                </Button>

            </article>


        </section>
            <h1>Fruitmand bezorgservice</h1>
        <form>
            <label htmlFor="first-name">
                Naam:
                <input
                    type="txt"
                    id="first-name"
                    {...register("firstname")}
            />
            </label>
            <label htmlFor="last-name">
                Lastname:
                <input
                    type="txt"
                    id="last-name"
                    {...register("lastname")}
                />
            </label>

            <label htmlFor="details-age">
                Leeftijd:
                <input
                    type="number"
                    name="age"
                    id="details-age"
                />
            </label>

            <label htmlFor="details-postcode">
                Postcode:
                <input
                    type="number"
                    name="postcode"
                    id="details-postcode"
                />

            </label>

            <label htmlFor="bezorg-tijden">Bezorgfrequentie</label>
            <select name="bezorg-tijden" id="bezorg-tijden">
                <option value="iedere-week">iedere week</option>
                <option value="om-de-week">om de week</option>
                <option value="iedere-maand">iedere maand</option>
            </select>

            <fieldset>
                <legend>Opties</legend>
                <div>
                    <input type="checkbox" id="overdag" name="overdag"/>
                        <label htmlFor="overdag">Overdag</label>
                </div>
                <div>
                    <input type="checkbox" id="s avonds" name="savonds"/>
                        <label htmlFor="'s avonds">'s avonds</label>
                </div>
            </fieldset>

            <fieldset>
                <legend>Opmerkingen</legend>

            <label htmlFor="comments">

                    <textarea
                        id="comments"
                        rows="4"
                        cols="40"
                        placeholder="vul hier je opmerkingen"
                        {...register("comments")}
                    >
          </textarea>
                </label>
                <label htmlFor="voorwaarden">
                <input
                    type="checkbox"
                    name="voorwaarden"
                    // checked={voorwaarden}
                    // onChange={() => setFormNewsletter(!formNewsletter)}
                />
                Ik ga akkoord met de voorwaarden.
            </label>

        </fieldset>

            <Button type="submit"/>Verzend<Button/>
           </form>


    </>

  )};


