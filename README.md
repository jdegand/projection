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
- Accessibility issues with cities' background color.
- Didn't see much in the official angular docs about event handling and content projection.  
- I have seen examples where the ng-content is wrapped with another element (div) and the click event goes on the wrapper element.  

## Useful Resources

- [Freepik]("https://www.freepik.com/free-photo/urban-transport-paper-style-assortment_15421422.htm#query=city%20cartoon&position=3&from_view=search&track=ais") - Cities Photo
- [Angular Docs](https://angular.io/guide/content-projection) - Content Projection
- [Stack Overflow](https://stackoverflow.com/questions/46786986/how-and-where-to-use-ng-deep) - ::ng-deep
- [Angular University](https://blog.angular-university.io/angular-ng-content/) - angular ng content
- [Blog](https://www.prestonlamb.com/blog/content-projection-in-angular) - content projection in angular