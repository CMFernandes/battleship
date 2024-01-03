export const ship = (shipLength) => {
    const length = shipLength;
    const hits = new Array(length).fill(null);
    
    let isVertical = false;

    function getIsVertical(){
        return isVertical
    }
    ;
    function changeDirection(){
        isVertical = !isVertical;
    };

    function hit(position){
        hits[position] = "hit";
    };

    function isSunk(){
        return hits.every(hit => hit === "hit");
    };

    return {
        hits,
        length,
        getIsVertical,
        hit,
        isSunk,
        changeDirection
    };
};
