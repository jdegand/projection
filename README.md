# Projection

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) #1 Projection

## Built With

- [Angular](https://angular.io)
- [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Directions

Refactor this working example of a dashboard containing multiple cards (teachers, students, ...). Implement the City card.

### Constraints:
You must keep CardComponent and ListItemComponent.
NgFor directive must be declared and stay inside the CardComponent.
No NgIf or NgSwitch inside CardComponent.
CSS: prefer not to use ::ng-deep, find a better way.

## Thoughts

- Didn't add tailwind.  
- Replaced trash svg with a X.  The trash svg didn't show up and this is probably related to Tailwind's absence.
- No picture included for the cities section.  Just added the text cities to divide sections and changed background color.  
- First thought was that I needed a city store.  Copied and pasted student store and used find and replace to change student to city.
- I added the city store and city-card component, but I couldn't get the name and the country to actually be in the html.  
- Need inputs for the city properties in the list-item component?
- I changed the name property binding to `[name]="item.firstname || item.name"` in the `card.component.html`.  This gives you at least a name property for the cities.  
- I added a country input binding but I didn't see the country name in the html.
- I forgot you *also* have to change the template html of app-list-item.  
- Implementing the city card shows how much work has to be done to maintain the same look for all cards.  You will have to add many more *ngIf's to the app-list-item template if there is a limited overlap of properties. 
- I added another ng-content for image source.  This ng-content was for a paragraph tag but I included a link inside the paragraph.  Not sure if this is a good practice but it seems to work fine.    
- Didn't see much in the official angular docs about event handling and content projection.  
- I have seen examples where the ng-content is wrapped with another element (div) and the click event goes on the wrapper element.
- I got the concept of changing the app-list-item to use ng-content, but I struggled getting ngTemplateOutletContext to work correctly.
- I looked at [Thomas' blog article](https://medium.com/@thomas.laforge/create-a-highly-customizable-component-cc3a9805e4c5) and nothing really stuck out as totally different.
- Adding the delete output to the todo-list component prompted an error to be thrown.  If you type the TemplateRef as ListItemComponent, you get an error.  
- I thought about adding the context variable to the ListItemComponent, but I don't think you can overwrite it in the template. 
- If you are going to use NgTemplateOutlet in a list, I'd imagine you have to just set the object in the template.   
- Searching google for clarity proved fruitless. 
- Why would there be a danger to add ChangeDetectionStrategy.onPush?  There is no mutation happening in the store.  Not using async pipe means data could be out of sync? 
- One problem of using pull requests to figure out code is that there are limited comments in the code and most people leave the pull request description blank.  
- I thought about passing CardType as part of the context object to *ngTemplateOutlet.  Then I guess you could have keep the old removeItem method.  

## Continued Development

- Accessibility issues with cities' background color.
- Need to look into testing with content projection 
- Typescript issues 

## Useful Resources

- [Freepik](https://www.freepik.com/free-photo/urban-transport-paper-style-assortment_15421422.htm#query=city%20cartoon&position=3&from_view=search&track=ais) - Cities Photo
- [Angular Docs](https://angular.io/guide/content-projection) - Content Projection
- [Stack Overflow](https://stackoverflow.com/questions/46786986/how-and-where-to-use-ng-deep) - ::ng-deep
- [Angular University](https://blog.angular-university.io/angular-ng-content/) - angular ng content
- [Blog](https://www.prestonlamb.com/blog/content-projection-in-angular) - content projection in angular
- [Angular University](https://blog.angular-university.io/onpush-change-detection-how-it-works/) - onpush change detection how it works
- [Angular Docs](https://angular.io/api/common/NgTemplateOutlet#description) - ngTemplateOutlet
- [Stack Overflow](https://stackoverflow.com/questions/66705298/cant-bind-to-ngtemplateoutlet-since-it-isnt-a-known-property-of-ng-containe) - cant bind to ngTemplateOutlet since it isn't a known property of ng-container
- [Stack Overflow](https://stackoverflow.com/questions/45055384/what-is-implicit-in-angular-2) - what is implicit in angular 2?