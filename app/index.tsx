import { Redirect } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Index() {
  // Sempre redireciona para a tela de login
  return <Redirect href="/login" />;
}
