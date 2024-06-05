class Sorting {

    elements = {
        sortingContainer: ()=> cy.get('.product_sort_container')
        
    }

    sortingZa(){
        this.elements.sortingContainer().select('za')
    }  
    
    sortinglohi(){
        this.elements.sortingContainer().select('lohi')
    }

    sortinghilo(){
        this.elements.sortingContainer().select('hilo')
    }   

}

module.exports = new Sorting();