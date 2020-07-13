import React, { useContext } from 'react'

import { AppContext } from '../../App'
import { numFormat } from '../../utils';

import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
  const mobileView = !useMediaQuery('(min-width:600px)');

  const open = modal === 'For' || modal === 'Against';
  const handleClose = () => {
    setModal(false);
  }

  const data = voters
    .filter(d => modal === "For" ? d.support === true : d.support === false)
    .sort((a, b) => b.votes - a.votes)

  const classes = useTableStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.tableContainer} style={{margin: mobileView ? '1vh' : null}}>
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

const useCellFormat = makeStyles(theme => ({
  address: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '10vh', // percentage seems buggy
  }
}))

const Row = ({ row }) => {
  const { address, display_name, votes, time } = row;
  const votesFormat = numFormat(votes);

  const classes = useCellFormat();

  return (
    <TableRow key={address}>
      <TableCell component="th" scope="row" className={classes.address}>
        {display_name || <a title={address}>{address}</a>}
      </TableCell>
      <TableCell className={classes.address} align="right">
        <a title={address}>{address}</a>
      </TableCell>
      <TableCell align="right">{votesFormat}</TableCell>
      <TableCell align="right">{time}</TableCell>
    </TableRow>
  )
}

export default TableModal
