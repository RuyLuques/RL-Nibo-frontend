export const fetchBackendProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/backend');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch backend projects');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching backend projects');
    }
  };
  
  export const fetchZapierProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/automationzapier');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch Zapier projects');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching Zapier projects');
    }
  };

  export const fetchUipathProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/automationuipath');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch Uipath projects');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching Uipath projects');
    }
  };
  
  export const fetchHubspotProjects = async () => {
    try {
      const response = await fetch('http://localhost:8000/automationhubspot');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch Hubspot projects');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching Hubspot projects');
    }
  };

  export const fetchProjectsData = async () => {
    try {
      const response = await fetch('http://localhost:8000/projects');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch projects data');
      }
    } catch (error) {
      throw new Error('An error occurred while fetching projects data');
    }
  };
  
export const fetchSeoProjects = async () => {
    try {
        const response = await fetch('http://localhost:8000/seo');
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch SEO projects');
        }
    } catch (error) {
        throw new Error('An error occurred while fetching SEO projects');
    }
};

export const fetchHotsite = async () => {
  try {
    const response = await fetch('http://localhost:8000/hotsite');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching products from the API.');
      return [];
    }
  } catch (error) {
    console.error('An unexpected error occurred when searching for products:', error);
    return [];
  }
};

export const submitHotsite = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/submitHotsite', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { type: 'success', text: 'Form sent successfully!' };
    } else {
      return { type: 'error', text: 'There was an error sending the form' };
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return { type: 'error', text: 'An unexpected error occurred when sending the form' };
  }
};

export const fetchTechnologies = async () => {
  try {
    const response = await fetch('http://localhost:8000/technologies');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error when searching for API technologies.');
      return [];
    }
  } catch (error) {
    console.error('An unexpected error occurred when searching for technologies:', error);
    return [];
  }
};

export async function fetchLandingPageData() {
  try {
    const response = await fetch('http://localhost:8000/landingpage');
    if (!response.ok) {
      throw new Error('Unable to retrieve data from the backend');
    }
    const jsonData = await response.json();
    return jsonData[0];
  } catch (error) {
    console.error('Error when searching for backend data:', error);
    throw error;
  }
}

export const submitLandingpage = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/submitLandingpage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { type: 'success', text: 'Form sent successfully!' };
    } else {
      return { type: 'error', text: 'An error occurred when sending the form.' };
    }
  } catch (error) {
    console.error('An unexpected error has occurred:', error);
    return { type: 'error', text: 'An unexpected error occurred when sending the form.' };
  }
};
