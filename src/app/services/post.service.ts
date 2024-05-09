import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient, private firestore: Firestore) {
    //this.mensajesRef = firestore.collection("items")
   }

  getAllPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getAllPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getPost(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }

  getPostComments(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
  }

  mensajesRef!: AngularFirestoreCollection<any>

  addMensaje(mensaje:string) {
    const colletion = collection(this.firestore, "mensajes")
    return addDoc(colletion, {"mensaje": mensaje})
    
    //const uuid = this.firestore.createId()
    //return this.mensajesRef.doc(uuid).set({"uuid": uuid,"mensaje": mensaje})

  }
}
