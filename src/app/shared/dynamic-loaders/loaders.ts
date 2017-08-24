/**
 * Loaders should contain a list of child items that have references 
 * to their parent.  It will be these objects that will fill the 
 * array of components for the dynamic loaders.
 * 
 * For example: Company A might have a list of these child items:
 *   -- sales
 *   -- customers
 *   -- locations
 *   
 * And company B might have:
 *   -- sales
 *   -- customers
 *   -- locations
 *   -- notary
 * 
 * Create these lists based on the selected company.
 *   -- this will be first used to generate the list of buttons
 *   -- when the buttons are clicked, a dialog is opened with the component dynamically injected
 */

export class Loaders {

}
