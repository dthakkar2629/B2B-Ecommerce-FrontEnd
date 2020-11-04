import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './SearchByImage.css'
import { Spinner, Button, Alert, Image } from 'react-bootstrap'
import axios from 'axios'
import { ImageSearch } from '@material-ui/icons';

class SearchByImage extends Component {
    state = {
        files: [],
        isLoading: false,
        recentImage: null,
        result: null,
        imgPath: null,
    }

    onDrop = (files) => {
        this.setState({
            files: [],
            isLoading: true,
            recentImage: null
        })
        this.loadImage(files)
    }

    loadImage = (files) => {
        setTimeout(() => {
            this.setState({
                files,
                isLoading: false
            }, () => {
                console.log(this.state.files[0].name)
            })
        }, 1000);
    }

    activateSpinner = () => {
        this.setState({
            files: [],
            isLoading: true,
        })
    }

    deactivateSpinner = () => {
        this.setState({ isLoading: false })
    }

    sendImage = () => {
        this.activateSpinner()

        //  const instance = axios.create({
        //      baseURL: 'http://localhost:5000',
        //      headers: {
        //         'Content-Type': 'multipart/form-data'
        //      },
        //  });

        //  instance({
        //      'method': 'POST',
        //      'url': '/detections',
        //      'data': {
        //          'images': this.state.files[0].file
        //      }
        //  }).then(res => {
        //     console.log(res.data)
        //     this.deactivateSpinner()
        // }).catch(err=>{
        //         console.log(err)
        //     })



        let formData = new FormData()
        formData.append('images', this.state.files[0], this.state.files[0].name)
        console.log(formData)
        console.log(this.state.files[0].path);

        let fileName = this.state.files[0].name;

        // console.log(this.state.files[0].path)
        // const searchImage = {
        //     images: this.state.files[0].path
        // }

        // console.log(searchImage)

        axios.post('http://localhost:5000/detections', formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(resp => {
                this.getImageClass(formData, fileName)
                console.log(resp.data);
                console.log(resp.data.response[0].detections[0]);

                this.setState({ result: [resp.data.response[0].detections[0].class] });

                console.log('Results: ', this.state.result)

                // this.deactivateSpinner()
            })
            .catch(err => {
                console.log(err)
            })
    }

    getImageClass = (obj, fileName) => {
        axios.post(`http://localhost:5000/image`, obj, {
            headers: {
                'Content-Type': 'application/json',
                'content-type': 'multipart/form-data'
            }
        })
            .then(resp => {
                console.log('Obj', obj)
                console.log('File', fileName)
                this.setState({ recentImage: `http://localhost:5000/img/${fileName}` })
                // this.setState({ recentImage: null })
                // this.getImage()
                console.log(resp)
                console.log(this.state.recentImage)
            })
            .catch(err => {
                console.log(err)
            })
        this.deactivateSpinner()

    }

    // getImage = () => {
    //     this.setState({ recentImage: null })

    //     axios.get(`http://localhost:5000/img/`)
    //         .then(res => {

    //             this.setState({ recentImage: `http://localhost:5000/img/` })
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));
        return (
            <Dropzone onDrop={this.onDrop} accept='image/png, image/jpeg'>
                {({ isDragActive, getRootProps, getInputProps }) => (
                    <section className="container">
                        <div {...getRootProps({ className: 'dropzone back' })}>
                            <input {...getInputProps()} />
                            <i className="far fa-image mb-2 text-muted" style={{ fontSize: 100 }}></i>
                            <p className='text-muted'>{isDragActive ? "Drop some images " : "Drag 'n' drop some files here, or click to select files"}</p>
                        </div>
                        <aside>
                            {files}
                        </aside>

                        {this.state.files.length > 0 &&
                            <Button variant='info' size='lg' className='mt-3' onClick={this.sendImage}>Select Image</Button>
                        }

                        {this.state.isLoading &&
                            <Spinner animation="border" role="status"></Spinner>
                        }
                        {/* 
                        {this.state.recentImage &&
                            <React.Fragment>
                                <Alert variant='primary'>
                                    {this.state.recentImage.data.classified}
                                </Alert>
                                <Image className='justify-content-center' src={this.state.recentImage.data.picture} height='200' rounded />
                            </React.Fragment>
                        } */}

                        {this.state.result &&
                            <React.Fragment>
                                <Alert variant='primary'>
                                    {this.state.result.map(res => <div><span>Image:</span> {res}</div>)}

                                </Alert>
                                <Image className='justify-content-center' src={this.state.recentImage} height='600' alt='' rounded />
                            </React.Fragment>
                        }

                    </section>
                )}



            </Dropzone>
        );
    }
}

export default SearchByImage;