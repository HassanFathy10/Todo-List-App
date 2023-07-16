import React, {Fragment, useState} from 'react';
import styles from './App.module.css';
import FilterInput from '../components/filter/FilterInput';
import CardList from '../components/Cardlist/cardList';
import AddUser from '../components/AddUser/Adduser';
import Modal from '../components/Modal/Modal';
import Button from '../components/Layout/Button';
import Row from '../components/Layout/Row';

const App = () => {
    // const inputEl = useRef(null);
    const [cardToggle, setCardToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [filter, setfilter] = useState("");
    const [state, newState] = useState([{
        id: 1,
        name: "hassan",
        age: "24",
        phone: "01143814036",
        Address: "Alexandria",
        type : "boy"
    },
    {
        id: 2,
        name: "yasmeen",
        age: "25",
        phone: "013565659494",
        Address: "Alexandria",
        type: "girl"
    },
    {
        id: 3,
        name: "kareem",
        age: "22",
        phone: "013565655",
        address: "Alexandria",
        type : "boy"
    },
    {
        id: 4,
        name: "jessy",
        age: "21",
        phone: "013565652494",
        address: "Alexandria",
        type : "girl"
    },
    ]);

    const addNewUserHandler = (data) => {
        console.log(data);
    };

    const deleteHandeler = (e, selectedId) => {
        // const deleteOberation = state.filter((e, index) => (index !== clickedIndex));
        // newState(deleteOberation);
        
        newState((prevState) => {
            return prevState.filter((el) => (el.id !== selectedId));
        });
        console.log("inside", state); // old info
    };
    console.log("outside", state); // new info

    const toggleHandler = () => setCardToggle(!cardToggle) ;
    
    // const testHandler = () => console.log(inputEl.current.value);
    
    // const onClick = ()=> inputEl.current.focus();
    const namesFilter = (names) => {
        setfilter(names);
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
                <CardList namesList={namesHandler()} type="boy" deleteFunc={deleteHandeler}></CardList>
                </div>
            </div>
            <Modal show={showModal} hide={() => setShowModal(false)}>
                <AddUser addNewUser={addNewUserHandler}></AddUser>
            </Modal>
        </Fragment>
)}

export default App;
