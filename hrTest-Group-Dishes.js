const dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
            ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
            ["Chicken Curry", "Chicken", "Curry Sauce"],
            ["Fried Rice", "Rice", "Onions", "Nuts"],
            ["Salad", "Spinach", "Nuts"],
            ["Sandwich", "Cheese", "Bread"],
            ["Quesadilla", "Chicken", "Cheese"]];


    const groupingDishes = (dis) => {
                if(!dis || typeof dis !== 'object' || !dis.length) return [];

                const dishSet = new Set(dis.map((d,i) =>d.slice(1)).flat());
                const ingrArr = [...dishSet].sort().map((ingr)=>{
                    const dishes = dis.sort().filter(d => d.includes(ingr)).map(d=>d[0]).sort();
                    
                    return [ingr, ...dishes];
                });

                console.log(ingrArr);
              
                return ingrArr;
              }
              
    groupingDishes(dishes);