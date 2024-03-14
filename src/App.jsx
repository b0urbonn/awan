import '../src/components/styles.css';
import '../src/components/styles.css';
import Card from './components/card.jsx';
import adoboImage from '../src/assets/images/img-adobo.jpg'; // Import the image

function App() {
    return (
        <div className='container d-grid'>
            <Card
                image={adoboImage} // Use the imported image variable
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
                className="adobo-card" // Apply custom class for Adobo card
            />
        </div>
    );
}

export default App;

