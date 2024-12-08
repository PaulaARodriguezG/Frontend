const formatDate=(date)=>{
    return new Date(date). toLocaleString('es-ES', {
        day:'2-digit',
        month: 'short',
        year:'numeric',
        hour:'2-digit',
        minute:'2-digit'
    });
};

export {formatDate};