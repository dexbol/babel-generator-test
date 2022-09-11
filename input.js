const Test = function () {
    var a = 1;
    return (
        <div>
            {a === 1 && (
                <div>
                    <p>1</p>
                    <p>11</p>
                </div>
            )}
            {a === 22 && (
                <div>
                    <p>2</p>
                    <p>22</p>
                </div>
            )}
        </div>
    );
};
