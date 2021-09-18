import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class Store extends Component {
    state={
        store:[]
    }
    fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                      store:response.data  
                    }
                )

            }
        )

    }
    render() {
        return (
            <div>
                <h1>SHOPPING APP</h1>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        onClick={this.fetchData}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        >FetchData</Button>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Category</TableCell>
                                        <TableCell>Rating</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                        {this.state.store.map(
                                          (value,index)=>{
                                              return<TableRow>
                                                  <TableCell>{value.id}</TableCell>
                                                  <TableCell><Avatar src={value.image}/></TableCell>
                                                  <TableCell>{value.title}</TableCell>
                                                  <TableCell>{value.price}</TableCell>
                                                  <TableCell>{value.description}</TableCell>
                                                  <TableCell>{value.category}</TableCell>
                                                  <TableCell>rate={value.rating.rate},count={value.rating.count}</TableCell>
                                                  
                                                
                                              </TableRow>
                                          }  
                                        )}
                                        
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>

                </Grid>
                
            </div>
        )
    }
}
