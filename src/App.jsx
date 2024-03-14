import '../src/components/styles.css';
import '../src/components/styles.css';
import Card from './components/card.jsx';
import adoboImage from '../src/assets/images/img-adobo.jpg';
import kareKareImage from '../src/assets/images/img-kare-kare.jpg';
import lechonImage from '../src/assets/images/img-lechon.jpg';
import pancitImage from '../src/assets/images/img-pansit.jpg';
import sinigangImage from '../src/assets/images/img-sinigang.jpg';

function App() {
    return (
        <div className='container d-grid'>
            <Card
                image={adoboImage} 
                title={<span className="highlight">Adobo</span>}
                body={
                    <>
                        <p><strong>Short Description:</strong> Adobo is a classic Filipino dish featuring tender meat marinated in vinegar, soy sauce, garlic, and spices, then simmered until rich and flavorful.</p>
                        <p><strong>Preparation Time:</strong> 10 minutes (plus marinating time)</p>
                        <p><strong>Cooking Time:</strong> 1 hour</p>
                        <p><strong>Servings:</strong> 4</p>
                        <p><strong>Ingredients:</strong> <br />
                            • 1 kg (2.2 lbs) chicken or pork, cut into serving pieces <br />
                            • 1/2 cup soy sauce <br />
                            • 1/2 cup vinegar <br />
                            • 6 cloves garlic, minced <br />
                            • 1 teaspoon whole peppercorns <br />
                            • 2 bay leaves <br />
                            • 1 tablespoon cooking oil <br />
                            • 1 cup water
                        </p>
                        <p><strong>Step by Step Instructions:</strong></p>
                        <ol>
                            <li className="highlight">In a bowl, combine the soy sauce, vinegar, minced garlic, peppercorns, and bay leaves.</li>
                            <li>Add the chicken or pork pieces to the marinade, ensuring they are fully coated. Marinate in the refrigerator for at least 30 minutes, preferably overnight for best flavor.</li>
                            <li>Heat oil in a large pan over medium heat. Remove the meat from the marinade and brown on all sides.</li>
                            <li>Pour in the marinade mixture and water. Bring to a boil, then reduce the heat to low and simmer, covered, for about 45 minutes to 1 hour or until the meat is tender and the sauce has thickened.</li>
                            <li>Serve hot with steamed rice.</li>
                        </ol>
                        <p><strong>Nutrition Facts:</strong> (Per Serving) <br />
                            Calories: 350 <br />
                            Protein: 25g <br />
                            Fat: 20g <br />
                            Carbohydrates: 15g
                        </p>
                    </>
                }
                className="adobo-card"
            />
            <Card
                image={kareKareImage} 
                title={<span className="highlight">Kare-Kare</span>}
                body={
                    <>
                        <p><strong>Short Description:</strong> Kare-Kare is a flavorful Filipino stew made with oxtail, tripe, and vegetables cooked in a rich peanut sauce, often served with shrimp paste on the side.</p>
                        <p><strong>Preparation Time:</strong> 20 minutes</p>
                        <p><strong>Cooking Time:</strong> 3 hours</p>
                        <p><strong>Servings:</strong> 6</p>
                        <p><strong>Ingredients:</strong> <br />
                            • 1 kg (2.2 lbs) oxtail, cut into 2-inch pieces <br />
                            • 500g (1 lb) beef tripe, cleaned and cut into strips <br />
                            • 8 cups water <br />
                            • 1 cup peanut butter <br />
                            • 2 tablespoons annatto powder (achuete) <br />
                            • 1 large onion, chopped <br />
                            • 4 cloves garlic, minced <br />
                            • 2 eggplants, sliced <br />
                            • 1 bundle string beans, cut into 2-inch pieces <br />
                            • 1 banana flower (optional), sliced <br />
                            • Salt and pepper to taste <br />
                            • Shrimp paste (bagoong) for serving
                        </p>
                        <p><strong>Step by Step Instructions:</strong></p>
                        <ol>
                            <li className="highlight">In a large pot, bring the water to a boil. Add the oxtail and beef tripe, then reduce the heat to low and simmer for about 2-3 hours or until the meat is tender, skimming off any impurities that rise to the surface.</li>
                            <li>In a separate pan, heat some oil over medium heat. Sauté the garlic and onions until fragrant.</li>
                            <li>Add the annatto powder and peanut butter to the pan, stirring constantly until well combined.</li>
                            <li>Transfer the peanut mixture to the pot with the meat and broth. Stir to combine.</li>
                            <li>Add the eggplants, string beans, and banana flower (if using) to the pot. Simmer for another 10-15 minutes or until the vegetables are tender.</li>
                            <li>Season with salt and pepper to taste.</li>
                            <li>Serve hot with shrimp paste on the side and steamed rice.</li>
                        </ol>
                        <table>
                            <caption><strong>Nutrition Facts:</strong> (Per Serving)</caption>
                            <tbody>
                                <tr>
                                    <td>Calories:</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>Protein:</td>
                                    <td>35g</td>
                                </tr>
                                <tr>
                                    <td>Fat:</td>
                                    <td>35g</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates:</td>
                                    <td>20g</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
                className="karekare-card" 
            />
            <Card
                image={lechonImage} 
                title={<span className="highlight">Lechon</span>}
                body={
                    <>
                        <p><strong>Short Description:</strong> Lechon is a traditional Filipino dish consisting of a whole roasted pig, cooked until the skin is crispy and the meat inside is tender and flavorful.</p>
                        <p><strong>Preparation Time:</strong> 30 minutes</p>
                        <p><strong>Cooking Time:</strong> 4-6 hours</p>
                        <p><strong>Servings:</strong> 10-12</p>
                        <p><strong>Ingredients:</strong> <br />
                            • 1 whole pig (about 20-25 kg or 45-55 lbs), cleaned and gutted <br />
                            • 5 tablespoons salt <br />
                            • 5 tablespoons pepper <br />
                            • 1 cup soy sauce <br />
                            • 1 cup calamansi juice or lemon juice <br />
                            • Banana leaves (optional) <br />
                            • Bamboo skewers or kitchen twine
                        </p>
                        <p><strong>Step by Step Instructions:</strong></p>
                        <ol>
                            <li>Preheat your oven or roasting pit to 325°F (165°C).</li>
                            <li>Pat the pig dry with paper towels. Rub the entire surface, inside and out, with salt and pepper.</li>
                            <li>Mix the soy sauce and calamansi juice together, then brush this mixture all over the pig, ensuring it's well coated.</li>
                            <li>If using banana leaves, line the inside of the pig with them. This helps keep the moisture in and adds flavor.</li>
                            <li>Truss the pig using bamboo skewers or kitchen twine to keep it in shape during roasting.</li>
                            <li>Place the pig on a roasting rack or directly on the grill if using a pit. Roast for 4-6 hours, basting every hour with the soy sauce and calamansi mixture, until the skin is crispy and the meat is cooked through (internal temperature should reach 160°F or 71°C).</li>
                            <li>Let the lechon rest for 20-30 minutes before carving. Serve hot with your favorite dipping sauce and steamed rice.</li>
                        </ol>
                        <table>
                            <caption><strong>Nutrition Facts:</strong> (Per Serving)</caption>
                            <tbody>
                                <tr>
                                    <td>Calories:</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>Protein:</td>
                                    <td>50g</td>
                                </tr>
                                <tr>
                                    <td>Fat:</td>
                                    <td>45g</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates:</td>
                                    <td>0g</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
                className="lechon-card" // Apply custom class for Lechon card
            />
            <Card
                image={pancitImage} 
                title={<span className="highlight">Pancit</span>}
                body={
                    <>
                        <p><strong>Short Description:</strong> Pancit is a versatile Filipino noodle dish that comes in various forms, typically stir-fried with a combination of meat, vegetables, and flavorful seasonings.</p>
                        <p><strong>Preparation Time:</strong> 15 minutes</p>
                        <p><strong>Cooking Time:</strong> 20 minutes</p>
                        <p><strong>Servings:</strong> 6</p>
                        <p><strong>Ingredients:</strong> <br />
                            • 400g (14 oz) pancit noodles (such as canton or bihon) <br />
                            • 2 tablespoons cooking oil <br />
                            • 3 cloves garlic, minced <br />
                            • 1 onion, sliced <br />
                            • 200g (7 oz) chicken breast, thinly sliced <br />
                            • 200g (7 oz) shrimp, peeled and deveined <br />
                            • 1 cup sliced cabbage <br />
                            • 1 carrot, julienned <br />
                            • 1 bell pepper, sliced <br />
                            • 1 cup sliced mushrooms (optional) <br />
                            • 1/4 cup soy sauce <br />
                            • 2 tablespoons oyster sauce <br />
                            • 1 tablespoon fish sauce (patis) <br />
                            • 1 teaspoon ground black pepper <br />
                            • Green onions, chopped, for garnish <br />
                            • Calamansi or lemon wedges, for serving
                        </p>
                        <p><strong>Step by Step Instructions:</strong></p>
                        <ol>
                            <li>Cook the pancit noodles according to package instructions. Drain and set aside.</li>
                            <li>Heat oil in a large wok or skillet over medium heat. Add the minced garlic and sliced onion, and sauté until fragrant.</li>
                            <li>Add the chicken breast slices and cook until they are no longer pink.</li>
                            <li>Push the chicken to one side of the wok and add the shrimp. Cook until they turn pink, then mix them with the chicken.</li>
                            <li>Add the sliced cabbage, julienned carrots, bell pepper, and mushrooms (if using). Stir-fry for a few minutes until the vegetables are tender yet crisp.</li>
                            <li>Toss in the cooked pancit noodles.</li>
                            <li>In a small bowl, mix together the soy sauce, oyster sauce, fish sauce, and ground black pepper. Pour this sauce over the noodles and toss everything together until well combined.</li>
                            <li>Continue to cook for another 2-3 minutes, allowing the flavors to meld together.</li>
                            <li>Garnish with chopped green onions.</li>
                            <li>Serve hot with calamansi or lemon wedges on the side.</li>
                        </ol>
                        <table>
                            <caption><strong>Nutrition Facts:</strong> (Per Serving)</caption>
                            <tbody>
                                <tr>
                                    <td>Calories:</td>
                                    <td>350</td>
                                </tr>
                                <tr>
                                    <td>Protein:</td>
                                    <td>20g</td>
                                </tr>
                                <tr>
                                    <td>Fat:</td>
                                    <td>10g</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates:</td>
                                    <td>45g</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
                className="pancit-card" // Apply custom class for Pancit card
            />
            <Card
                image={sinigangImage} 
                title={<span className="highlight">Sinigang</span>}
                body={
                    <>
                        <p><strong>Short Description:</strong> Sinigang is a comforting Filipino sour soup made with pork, shrimp, or fish, flavored with tamarind and filled with a variety of vegetables.</p>
                        <p><strong>Preparation Time:</strong> 15 minutes</p>
                        <p><strong>Cooking Time:</strong> 45 minutes</p>
                        <p><strong>Servings:</strong> 6</p>
                        <p><strong>Ingredients:</strong> <br />
                            • 500g (1 lb) pork ribs or pork belly, cut into chunks <br />
                            • 8 cups water <br />
                            • 1 medium onion, quartered <br />
                            • 2 tomatoes, quartered <br />
                            • 2 tablespoons tamarind paste or sinigang mix <br />
                            • 2 cups radish, sliced <br />
                            • 2 cups eggplant, sliced <br />
                            • 1 cup string beans, cut into 2-inch pieces <br />
                            • 2 cups spinach or kangkong leaves <br />
                            • Salt and pepper to taste
                        </p>
                        <p><strong>Step by Step Instructions:</strong></p>
                        <ol>
                            <li>In a large pot, bring the water to a boil. Add the pork ribs or pork belly and simmer for 20 minutes, skimming off any foam that rises to the surface.</li>
                            <li>Add the onions and tomatoes to the pot and simmer for another 10 minutes.</li>
                            <li>Stir in the tamarind paste or sinigang mix until dissolved.</li>
                            <li>Add the radish, eggplant, and string beans to the pot and cook for about 5-7 minutes or until the vegetables are tender.</li>
                            <li>Add the spinach or kangkong leaves and cook for an additional 2 minutes until wilted.</li>
                            <li>Season with salt and pepper to taste.</li>
                            <li>Serve hot with steamed rice.</li>
                        </ol>
                        <table>
                            <caption><strong>Nutrition Facts:</strong> (Per Serving)</caption>
                            <tbody>
                                <tr>
                                    <td>Calories:</td>
                                    <td>250</td>
                                </tr>
                                <tr>
                                    <td>Protein:</td>
                                    <td>15g</td>
                                </tr>
                                <tr>
                                    <td>Fat:</td>
                                    <td>10g</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates:</td>
                                    <td>25g</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
                className="sinigang-card" // Apply custom class for Sinigang card
            />
        </div>
    );
}

export default App;

