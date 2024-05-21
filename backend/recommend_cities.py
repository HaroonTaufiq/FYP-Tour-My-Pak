import pickle
import pandas as pd

# Load the KMeans model
with open('location_recommendation_model.pkl', 'rb') as f:
    kmeans = pickle.load(f)

# Load data
df = pd.read_csv('Tourist Destinations_Updated.csv')

# Extract input city from command-line argument
import sys
input_city = sys.argv[1]


# Check if the city exists in the dataset
if input_city in df['_key'].values:
    cluster = df.loc[df['_key'] == input_city, 'loc_clusters'].iloc[0]
    cities = df.loc[df['loc_clusters'] == cluster, '_key']
    recommended_cities = [city for city in cities if city != input_city]
    print(recommended_cities)
else:
    print("City not found in the dataset.")
