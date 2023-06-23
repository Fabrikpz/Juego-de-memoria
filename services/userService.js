//CAMBIAR EL "RUTA" POR EL NOMBRE DE LA COLECCION

/*export const getUserDetails = (db, ruta) => {
    return new Promise((resolve, reject) => {
        db.collection('alumnos')
            .find({ 'ruta': ruta })
            .toArray((err, docs) => {
                if (err) {
                    reject(err);
                } else if (docs && docs.length > 0) {
                    resolve(docs[0]);
                } else {
                    reject(new Error('No se encontro la ruta'));
                }
            });
    });
};*/
