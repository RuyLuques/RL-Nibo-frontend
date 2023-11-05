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
      console.error('Erro ao buscar produtos da API.');
      return [];
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado ao buscar produtos:', error);
    return [];
  }
};

export const submitForm = async (data) => {
  try {
    const response = await fetch('http://localhost:8000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return { type: 'success', text: 'Formulário enviado com sucesso!' };
    } else {
      return { type: 'error', text: 'Ocorreu um erro ao enviar o formulário.' };
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado:', error);
    return { type: 'error', text: 'Ocorreu um erro inesperado ao enviar o formulário.' };
  }
};

export const fetchTechnologies = async () => {
  try {
    const response = await fetch('http://localhost:8000/technologies');
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Erro ao buscar tecnologias da API.');
      return [];
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado ao buscar tecnologias:', error);
    return [];
  }
};
