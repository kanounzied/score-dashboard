import React, {useMemo, useEffect, useState} from "react";
import {useTable, useSortBy} from 'react-table';
import {collection, getDocs} from "firebase/firestore/lite";
import db from '../../services/firebaseService'
import "./style.css"


export default function TableDashboard() {

    const [usersList, setUsersList] = useState([])

    useEffect(async () => {
        const equipesCol = collection(db, 'equipes');
        const equipeSnapShot = await getDocs(equipesCol);
        setUsersList([]);
        return equipeSnapShot.docs.map(doc => {
            setUsersList(usersList => [...usersList, doc.data()])
            return true;
        });
    }, [])

    useEffect(() => {
        console.log("from table: ", usersList)
    }, [usersList])

    const data = usersList

    const columns = useMemo(
        () => [
            {
                Header: "Nom de l'equipe",
                accessor: 'name', // accessor is the "key" in the data
                disableSortBy: true,
                className: "fontbold",
            },
            {
                Header: "Chef d'equipe",
                accessor: 'chef',
                disableSortBy: true,

            },
            {
                Header: "Etablissement",
                accessor: 'etablissement',
                disableSortBy: true,
            },
            {
                Header: "Score",
                accessor: 'total',
            },
        ],
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
            columns,
            data
        },
        useSortBy,
    )

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th{...column.getHeaderProps(column.getSortByToggleProps())}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return (
                                <td{...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}