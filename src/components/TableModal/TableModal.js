import React, { useContext } from 'react'

import { AppContext } from '../../App'

import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';


const useTableStyles = makeStyles(theme => ({
  table: {
    padding: 20,
  },
  headerRow: {
    fontWeight: 700,
  },
  tableContainer: {
    maxHeight:"calc(100% - 200px)",
    margin:"100px",
    background:"white",
    overflowY: "auto",
  }
}));


const TableModal = () => {
  const { modal, setModal, voters } = useContext(AppContext);


  const open = modal === 'For' || modal === 'Against';
  const handleClose = () => {
    setModal(false);
  }

  const data = voters
    .filter(d => modal === "For" ? d.support === true : d.support === false)
    .sort((a, b) => b.votes - a.votes)

  const classes = useTableStyles()

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.tableContainer}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.headerRow}>Name</TableCell>
                <TableCell className={classes.headerRow} align="right">Address</TableCell>
                <TableCell className={classes.headerRow} align="right">Votes</TableCell>
                <TableCell className={classes.headerRow} align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, i) => (
                <Row row={row} key={i} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Modal>
  )
}

const Row = ({ row }) => {
  const { address, display_name, votes, time } = row;
  const votesFormat = votes.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <TableRow key={address}>
      <TableCell component="th" scope="row">
        {display_name || address}
      </TableCell>
      <TableCell align="right">{address}</TableCell>
      <TableCell align="right">{votesFormat}</TableCell>
      <TableCell align="right">{time}</TableCell>
    </TableRow>
  )
}

export default TableModal
