const formatDate = (dateString) => {
    const regex = /^(\d{4}-\d{2}-\d{2}).*T(\d{2}:\d{2}).*/;
    const match = dateString.match(regex);

    if (match) {
        const date = match[1];
        const time = match[2];
        return `${date} ${time}`;
      }
}

export default formatDate