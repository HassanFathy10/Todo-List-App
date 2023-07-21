import React, {Fragment, useState} from 'react';
import styles from './App.module.css';
import FilterInput from '../components/filter/FilterInput';
import CardList from '../components/Cardlist/cardList';
import AddUser from '../components/AddUser/Adduser';
import Modal from '../components/Modal/Modal';
import Button from '../components/Layout/Button';
import Row from '../components/Layout/Row';

const App = () => {
    const [cardToggle, setCardToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState("");
    const [state, setState] = useState([{
        id: 0,
        name: "hassan",
        age: 24,
        phone: "01143814036",
        address: "Alexandria",
        type : "boy"
    },
    {
        id: 1,
        name: "yasmeen",
        age: 25,
        phone: "013565659494",
        address: "Alexandria",
        type: "girl"
    },
    {
        id: 2,
        name: "kareem",
        age: 22,
        phone: "013565655",
        address: "Alexandria",
        type : "boy"
    },
    {
        id: 3,
        name: "jessy",
        age: 21,
        phone: "013565652494",
        address: "Alexandria",
        type : "girl"
    },
    ]);

    const addNewUserHandler = (data) => {
        return setState((prevState) => ([...prevState, data]));
    };

    const deleteHandeler = (e, selectedId) => {

        setState((prevState) => {
            return prevState.filter((el) => (el.id !== selectedId));
        });
    };

    const toggleHandler = () => setCardToggle(!cardToggle) ;
    
    const namesFilter = (names) => {
        setFilter(names);
    };

    const namesHandler = () => {
        if (filter.length !== 0) {
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    };
    return (
        <Fragment>
            <div className={styles.main}>
                    <h1>List of Data</h1>
                    <Row>
                        <Button style={{ marginRight: "50px" }} onClick={toggleHandler}>
                        {cardToggle ? "Hide Names" : "Show Names"}
                        </Button>
                        <Button onClick={() => setShowModal(true)}>New Record</Button>
                    </Row>
                <div style={{ "paddingTop": "10px" }} className={cardToggle ? styles.show : styles.hide}>
                    <FilterInput filteration={namesFilter}></FilterInput>
                    <CardList namesList={namesHandler()} deleteFunc={deleteHandeler}></CardList>
                </div>
            </div>
            <Modal show={showModal} hide={() => setShowModal(false)}>
                <AddUser addNewUser={addNewUserHandler} closeModal={() => setShowModal(false)}></AddUser>
            </Modal>
        </Fragment>
)}

export default App;
