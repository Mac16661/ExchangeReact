import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Modal, Box } from "@mui/material";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [user, setUser] = useState({});
  const [openWallet, setOpenWallet] = useState(false);
  const [amount, setAmount] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    signIn();
  };

  const [openSignUP, setOpenSignUp] = useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
    // console.log(name, email, password);
    signUp();
  };

  const handleWallet = () => {
    //TODO:
    let emailID = localStorage.getItem("email");
    console.log(emailID);
    axios
      .post("http://localhost:80/money", {
        email: emailID,
      })
      .then((res) => setAmount(res.data));
    setOpenWallet(true);
  };

  const handleCloseWallet = () => {
    setOpenWallet(false);
  };

  const signUp = () => {
    axios
      .post("http://localhost:80/add_user", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("email", res.data[0].email);
        setUser(res.data[0]);
      });
  };

  const signIn = () => {
    axios
      .post("http://localhost:80/auth_user", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("email", res.data[0].email);
        setUser(res.data[0]);
      });
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3000/").then((res) => console.log(res.data));
  // }, []);

  return (
    <div className="w-full px-5 bg-white">
      <div className="flex">
        <div className="flex items-center ">
          <img
            className="h-20"
            src="https://thumbs.dreamstime.com/b/currency-exchange-icon-dollar-euro-yuan-gbp-foreign-concept-circulation-money-world-vector-200509474.jpg"
            alt="logo"
          />
          <h1 className=" font-bold border-r-2 border-lightgray pr-10 text-active text-base">
            RAPID EXCHANGE
          </h1>
        </div>
        <div className="flex justify-start pl-5">
          <a
            className="flex items-center mx-5 text-m  font-medium text-unactive hover:text-active"
            href="/"
          >
            Causes
          </a>
          <a
            className="flex items-center mx-5 text-m  font-medium text-unactive hover:text-active"
            href="/"
          >
            Projects
          </a>
          {/* <a
            className="flex items-center mx-5 text-m font-medium text-unactive hover:text-active"
            href="/"
          >
            Buy 1Earth
          </a> */}
        </div>
        <div className="flex items-center flex-1 pl-4">
          <img
            className="h-5"
            src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"
            alt=""
          />
          <input
            className="flex-1 text-sm text-active font-medium"
            placeholder="Search"
          />
        </div>
        {user.name ? (
          <div className="flex items-center pr-3">
            <p>{user.name}</p>
            <button
              onClick={() => {
                setUser(null);
                window.location.reload();
              }}
              className="mx-2 font-medium bg-gray px-3 py-2 rounded-lg text-active text-sm"
            >
              Log Out
            </button>
            <AccountBalanceWalletIcon color="primary" onClick={handleWallet} />
            <Modal
              open={openWallet}
              onClose={handleCloseWallet}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  width: 250,
                  backgroundColor: "white",
                  position: "absolute",
                  top: 75,
                  right: 0,
                  borderRadius: 3,
                }}
              >
                <h3 style={{ margin: 5 }}>INR ₹ {amount.INR}</h3>

                <h3 style={{ margin: 5 }}>USD $ {amount.USD}</h3>

                <Button>Deposite</Button>
                <Button>Withdraw</Button>
              </Box>
            </Modal>
          </div>
        ) : (
          <div className="flex items-center pr-3">
            <button
              onClick={handleClickOpen}
              className="mx-2 font-medium bg-gray px-3 py-2 rounded-lg text-active text-sm"
            >
              Log in
            </button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Login with Gmail</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Login</Button>
              </DialogActions>
            </Dialog>
            <button
              onClick={handleClickOpenSignUp}
              className="mx-2 font-medium bg-purple px-3 py-2 rounded-lg text-white text-sm"
            >
              Sign up
            </button>
            <Dialog open={openSignUP} onClose={handleCloseSignUp}>
              <DialogTitle>Login with Gmail</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="User name"
                  type="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="standard"
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                />

                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseSignUp}>Cancel</Button>
                <Button onClick={handleCloseSignUp}>Sign Up</Button>
              </DialogActions>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
